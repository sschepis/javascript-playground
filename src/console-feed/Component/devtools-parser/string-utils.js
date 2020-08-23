"use strict";
// Taken from the source of chrome devtools:
// https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/platform/utilities.js#L805-L1006
exports.__esModule = true;
// Copyright 2014 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
var String;
(function (String) {
    /**
     * @param {string} string
     * @param {number} index
     * @return {boolean}
     */
    function isDigitAt(string, index) {
        var c = string.charCodeAt(index);
        return 48 <= c && c <= 57;
    }
    /**
     * @param {string} format
     * @param {!Object.<string, function(string, ...):*>} formatters
     * @return {!Array.<!Object>}
     */
    function tokenizeFormatString(format, formatters) {
        var tokens = [];
        var substitutionIndex = 0;
        function addStringToken(str) {
            if (tokens.length && tokens[tokens.length - 1].type === 'string')
                tokens[tokens.length - 1].value += str;
            else
                tokens.push({ type: 'string', value: str });
        }
        function addSpecifierToken(specifier, precision, substitutionIndex) {
            tokens.push({
                type: 'specifier',
                specifier: specifier,
                precision: precision,
                substitutionIndex: substitutionIndex
            });
        }
        var index = 0;
        for (var precentIndex = format.indexOf('%', index); precentIndex !== -1; precentIndex = format.indexOf('%', index)) {
            if (format.length === index)
                // unescaped % sign at the end of the format string.
                break;
            addStringToken(format.substring(index, precentIndex));
            index = precentIndex + 1;
            if (format[index] === '%') {
                // %% escape sequence.
                addStringToken('%');
                ++index;
                continue;
            }
            if (isDigitAt(format, index)) {
                // The first character is a number, it might be a substitution index.
                var number = parseInt(format.substring(index), 10);
                while (isDigitAt(format, index))
                    ++index;
                // If the number is greater than zero and ends with a "$",
                // then this is a substitution index.
                if (number > 0 && format[index] === '$') {
                    substitutionIndex = number - 1;
                    ++index;
                }
            }
            var precision = -1;
            if (format[index] === '.') {
                // This is a precision specifier. If no digit follows the ".",
                // then the precision should be zero.
                ++index;
                precision = parseInt(format.substring(index), 10);
                if (isNaN(precision))
                    precision = 0;
                while (isDigitAt(format, index))
                    ++index;
            }
            if (!(format[index] in formatters)) {
                addStringToken(format.substring(precentIndex, index + 1));
                ++index;
                continue;
            }
            addSpecifierToken(format[index], precision, substitutionIndex);
            ++substitutionIndex;
            ++index;
        }
        addStringToken(format.substring(index));
        return tokens;
    }
    /**
     * @param {string} format
     * @param {?ArrayLike} substitutions
     * @param {!Object.<string, function(string, ...):Q>} formatters
     * @param {!T} initialValue
     * @param {function(T, Q): T|undefined} append
     * @param {!Array.<!Object>=} tokenizedFormat
     * @return {!{formattedResult: T, unusedSubstitutions: ?ArrayLike}};
     * @template T, Q
     */
    function format(format, substitutions, formatters, initialValue, append, tokenizedFormat) {
        if (!format || !substitutions || !substitutions.length)
            return {
                formattedResult: append(initialValue, format),
                unusedSubstitutions: substitutions
            };
        function prettyFunctionName() {
            return ('String.format("' +
                format +
                '", "' +
                Array.prototype.join.call(substitutions, '", "') +
                '")');
        }
        function warn(msg) {
            console.warn(prettyFunctionName() + ': ' + msg);
        }
        function error(msg) {
            console.error(prettyFunctionName() + ': ' + msg);
        }
        var result = initialValue;
        var tokens = tokenizedFormat || tokenizeFormatString(format, formatters);
        var usedSubstitutionIndexes = {};
        for (var i = 0; i < tokens.length; ++i) {
            var token = tokens[i];
            if (token.type === 'string') {
                result = append(result, token.value);
                continue;
            }
            if (token.type !== 'specifier') {
                error('Unknown token type "' + token.type + '" found.');
                continue;
            }
            if (token.substitutionIndex >= substitutions.length) {
                // If there are not enough substitutions for the current substitutionIndex
                // just output the format specifier literally and move on.
                error('not enough substitution arguments. Had ' +
                    substitutions.length +
                    ' but needed ' +
                    (token.substitutionIndex + 1) +
                    ', so substitution was skipped.');
                result = append(result, '%' + (token.precision > -1 ? token.precision : '') + token.specifier);
                continue;
            }
            usedSubstitutionIndexes[token.substitutionIndex] = true;
            if (!(token.specifier in formatters)) {
                // Encountered an unsupported format character, treat as a string.
                warn('unsupported format character \u201C' +
                    token.specifier +
                    '\u201D. Treating as a string.');
                result = append(result, substitutions[token.substitutionIndex]);
                continue;
            }
            result = append(result, formatters[token.specifier](substitutions[token.substitutionIndex], token));
        }
        var unusedSubstitutions = [];
        for (var i = 0; i < substitutions.length; ++i) {
            if (i in usedSubstitutionIndexes)
                continue;
            unusedSubstitutions.push(substitutions[i]);
        }
        return { formattedResult: result, unusedSubstitutions: unusedSubstitutions };
    }
    String.format = format;
})(String = exports.String || (exports.String = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudC9kZXZ0b29scy1wYXJzZXIvc3RyaW5nLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7QUFDNUMsNkdBQTZHOztBQUU3Ryw0REFBNEQ7QUFDNUQsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSx5RUFBeUU7QUFDekUsT0FBTztBQUNQLEVBQUU7QUFDRixzRUFBc0U7QUFDdEUsZ0VBQWdFO0FBQ2hFLCtEQUErRDtBQUMvRCx5RUFBeUU7QUFDekUsZ0VBQWdFO0FBQ2hFLGdCQUFnQjtBQUNoQiw0REFBNEQ7QUFDNUQsdUVBQXVFO0FBQ3ZFLDJEQUEyRDtBQUMzRCxFQUFFO0FBQ0Ysc0VBQXNFO0FBQ3RFLG9FQUFvRTtBQUNwRSx3RUFBd0U7QUFDeEUsdUVBQXVFO0FBQ3ZFLHdFQUF3RTtBQUN4RSxtRUFBbUU7QUFDbkUsd0VBQXdFO0FBQ3hFLHdFQUF3RTtBQUN4RSxzRUFBc0U7QUFDdEUsd0VBQXdFO0FBQ3hFLHVFQUF1RTtBQUV2RSxJQUFpQixNQUFNLENBMk10QjtBQTNNRCxXQUFpQixNQUFNO0lBQ3JCOzs7O09BSUc7SUFDSCxTQUFTLFNBQVMsQ0FBQyxNQUFXLEVBQUUsS0FBVTtRQUN4QyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzNCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBUyxvQkFBb0IsQ0FBQyxNQUFXLEVBQUUsVUFBZTtRQUN4RCxJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUE7UUFDcEIsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLENBQUE7UUFFekIsU0FBUyxjQUFjLENBQUMsR0FBUTtZQUM5QixJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFD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