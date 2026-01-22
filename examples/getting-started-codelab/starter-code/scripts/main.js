/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
(function () {
  let currentButton;

  function handleColorChange(event) {
    // Add code for changing color.
    loadWorkspace(event.target);

    let code = javascript.javascriptGenerator.workspaceToCode(
      Blockly.getMainWorkspace(),
    );

    code += 'MusicMaker.colorChange(event.target);';

    try {
      eval(code);
    } catch (error) {
      console.log(error);
    }
  }

  function save(button) {
    // Add code for saving the behavior of a button.
    button.blocklySave = Blockly.serialization.workspaces.save(
      Blockly.getMainWorkspace(),
    );
  }

  function handleSave() {
    document.body.setAttribute('mode', 'edit');
    save(currentButton);
  }

  function loadWorkspace(button) {
    const workspace = Blockly.getMainWorkspace();
    if (button.blocklySave) {
      Blockly.serialization.workspaces.load(button.blocklySave, workspace);
    } else {
      workspace.clear();
    }
  }

  function enableEditMode() {
    document.body.setAttribute('mode', 'edit');
    document.querySelectorAll('.button').forEach((btn) => {
      btn.removeEventListener('click', handleColorChange);
      btn.addEventListener('click', enableBlocklyMode);
    });
  }

  function enableMakerMode() {
    document.body.setAttribute('mode', 'maker');
    document.querySelectorAll('.button').forEach((btn) => {
      btn.addEventListener('click', handleColorChange);
      btn.removeEventListener('click', enableBlocklyMode);
    });
  }

  function enableBlocklyMode(e) {
    document.body.setAttribute('mode', 'blockly');
    currentButton = e.target;

    loadWorkspace(currentButton);
  }

  document.querySelector('#edit').addEventListener('click', enableEditMode);
  document.querySelector('#done').addEventListener('click', enableMakerMode);
  document.querySelector('#save').addEventListener('click', handleSave);

  enableMakerMode();

  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'change_color',
      },
    ],
  };

  Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    scrollbars: false,
    horizontalLayout: true,
    toolboxPosition: 'end',
  });
})();
