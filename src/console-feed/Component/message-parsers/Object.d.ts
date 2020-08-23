import * as React from 'react';
import { Theme } from '../../definitions/Component';
import { Message } from '../../definitions/Component';
interface Props {
    log: Message;
    quoted: boolean;
    theme?: Theme;
}
declare class ObjectTree extends React.PureComponent<Props, any> {
    render(): JSX.Element[];
}
declare const _default: React.SFC<import("emotion-theming/types/helper").AddOptionalTo<Props & React.ClassAttributes<ObjectTree>, "theme">>;
export default _default;
