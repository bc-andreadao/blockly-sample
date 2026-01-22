Blockly.common.defineBlocksWithJsonArray([
  {
    "type": "change_color",
    "message0": "Color %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          ["light pink", "#FFB6C1"],
          ["pink", "#FF69B4"],
          ["red", "#DC143C"],
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 355
  }
]);

javascript.javascriptGenerator.forBlock['change_color'] = function(block) {
  let value = '\'' + block.getFieldValue('VALUE') + '\'';
  return 'MusicMaker.queueColor(' + value + ');\n';
};