/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
import 'es6-promise/auto';  // polyfill Promise on IE

import React from 'react'

import { CommandRegistry } from '@phosphor/commands';
import { Message } from '@phosphor/messaging';

import { 
  BoxPanel, 
  CommandPalette, 
  ContextMenu, 
  DockPanel, 
  Menu, 
  MenuBar, 
  Widget 
} from '@phosphor/widgets';

const commands = new CommandRegistry();

export function createWorkspaceMenu(): Menu {
  let root = new Menu({ commands });
  root.addItem({ command: 'jsplayground:new-sketch' });
  root.addItem({ command: 'jsplayground:open-sketch' });
  root.addItem({ command: 'jsplayground:clone-sketch' });
  root.addItem({ type: 'separator' });
  root.addItem({ command: 'jsplayground:settings' });
  return root;
}

export function createSketchMenu(): Menu {
  let root = new Menu({ commands });
  root.addItem({ command: 'sketch:run-sketch' });
  root.addItem({ type: 'separator' });
  root.addItem({ command: 'sketch:toggle-livemode' });
  return root;
}

export class CompiledOutputWidget extends Widget {
  static createNode(): HTMLElement {
    let node = document.createElement('div');
    return node;
  }
  constructor(name: string) {
    super({ node: CompiledOutputWidget.createNode() });
    this.setFlag(Widget.Flag.DisallowLayout);
    this.addClass('content');
    this.addClass(name.toLowerCase());
    this.title.label = name;
    this.title.closable = true;
    this.title.caption = `Long description for: ${name}`;
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus();
    }
  }
}

export class HTMLInputWidget extends Widget {
  static createNode(): HTMLElement {
    let node = document.createElement('div');
    return node;
  }
  constructor(name: string) {
    super({ node: HTMLInputWidget.createNode() });
    this.setFlag(Widget.Flag.DisallowLayout);
    this.addClass('content');
    this.addClass(name.toLowerCase());
    this.title.label = name;
    this.title.closable = true;
    this.title.caption = `Long description for: ${name}`;
  }
  // get inputNode(): HTMLInputElement {
  //   return this.node.getElementsByTagName('input')[0] as HTMLInputElement;
  // }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus();
    }
  }
}

export class CSSInputWidget extends Widget {
  static createNode(): HTMLElement {
    let node = document.createElement('div');
    return node;
  }
  constructor(name: string) {
    super({ node: CSSInputWidget.createNode() });
    this.setFlag(Widget.Flag.DisallowLayout);
    this.addClass('content');
    this.addClass(name.toLowerCase());
    this.title.label = name;
    this.title.closable = true;
    this.title.caption = `Long description for: ${name}`;
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus();
    }
  }
}

export class JSInputWidget extends Widget {
  static createNode(): HTMLElement {
    let node = document.createElement('div');
    return node;
  }
  constructor(name: string) {
    super({ node: JSInputWidget.createNode() });
    this.setFlag(Widget.Flag.DisallowLayout);
    this.addClass('content');
    this.addClass(name.toLowerCase());
    this.title.label = name;
    this.title.closable = true;
    this.title.caption = `Long description for: ${name}`;
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus();
    }
  }
}

export class ConsoleOutputWidget extends Widget {
  static createNode(): HTMLElement {
    let node = document.createElement('div');
    return node;
  }
  constructor(name: string) {
    super({ node: ConsoleOutputWidget.createNode() });
    this.setFlag(Widget.Flag.DisallowLayout);
    this.addClass('content');
    this.addClass(name.toLowerCase());
    this.title.label = name;
    this.title.closable = true;
    this.title.caption = `Long description for: ${name}`;
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus();
    }
  }
}

export function layout(): any {
  commands.addCommand('jsplayground:new-sketch', {
    label: 'New Sketch',
    mnemonic: 0,
    caption: 'Create a new sketch',
    execute: () => {
      console.log('New Sketch');
    }
  });
  commands.addCommand('jsplayground:open-sketch', {
    label: 'Open Sketch',
    mnemonic: 0,
    caption: 'Open an existing sketch',
    execute: () => {
      console.log('Open Sketch');
    }
  });
  commands.addCommand('jsplayground:clone-sketch', {
    label: 'Clone Sketch',
    mnemonic: 0,
    caption: 'Clone current sketch',
    execute: () => {
      console.log('Clone Sketch');
    }
  });
  commands.addCommand('sketch:run-sketch', {
    label: 'Run Sketch',
    caption: 'Run Current Sketch',
    mnemonic: 1,
    execute: () => {
      console.log('Run Sketch');
    }
  });
  commands.addCommand('sketch:live-mode', {
    label: 'Live Mode',
    mnemonic: 1,
    caption: 'Toggle Live Mode',
    execute: () => {
      console.log('Live Mode');
    }
  });

  let menu1 = createWorkspaceMenu();
  menu1.title.label = 'Workspace';
  menu1.title.mnemonic = 0;

  let menu2 = createSketchMenu();
  menu2.title.label = 'Sketch';
  menu2.title.mnemonic = 1;

  // let bar = new MenuBar();
  // bar.addMenu(menu1);
  // bar.addMenu(menu2);
  // bar.id = 'menuBar';

  let palette = new CommandPalette({ commands });
  palette.addItem({ command: 'jsplayground:new-sketch', category: 'Workspace' });
  palette.addItem({ command: 'jsplayground:open-sketch', category: 'Workspace' });
  palette.addItem({ command: 'jsplayground:clone-sketch', category: 'Workspace' });
  palette.addItem({ command: 'jsplayground:settings', category: 'Workspace' });
  palette.addItem({ command: 'sketch:run-sketch', category: 'Sketch' });
  palette.addItem({ command: 'sketch:toggle-livemode', category: 'Sketch' });
  palette.id = 'palette';

  let contextMenu = new ContextMenu({ commands });

  document.addEventListener('contextmenu', (event: MouseEvent) => {
    if (contextMenu.open(event)) {
      event.preventDefault();
    }
  });

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    commands.processKeydownEvent(event);
  });

  let r1 = new CompiledOutputWidget('Output');
  let b1 = new HTMLInputWidget('HTML');
  let g1 = new CSSInputWidget('CSS');
  let y1 = new JSInputWidget('JS');
  let z1 = new ConsoleOutputWidget('Console');

  let dock = new DockPanel();
  dock.addWidget(r1);
  dock.addWidget(b1, { mode: 'split-right', ref: r1 });
  dock.addWidget(y1, { mode: 'split-top', ref: b1 });
  dock.addWidget(g1, { mode: 'split-left', ref: b1 });
  dock.addWidget(z1, { mode: 'split-bottom', ref: r1 });
  dock.id = 'dock';

  let savedLayouts: DockPanel.ILayoutConfig[] = [];

  commands.addCommand('save-dock-layout', {
    label: 'Save Layout',
    caption: 'Save the current dock layout',
    execute: () => {
      savedLayouts.push(dock.saveLayout());
      palette.addItem({
        command: 'restore-dock-layout',
        category: 'Dock Layout',
        args: { index: savedLayouts.length - 1 }
      });
    }
  });

  commands.addCommand('restore-dock-layout', {
    label: args => {
      return `Restore Layout ${args.index as number}`;
    },
    execute: args => {
      dock.restoreLayout(savedLayouts[args.index as number]);
    }
  });

  palette.addItem({
    command: 'save-dock-layout',
    category: 'Dock Layout',
    rank: 0
  });

  BoxPanel.setStretch(dock, 1);

  return { 
    main: [palette, dock],
    menu: [menu1, menu2]
  }
}
