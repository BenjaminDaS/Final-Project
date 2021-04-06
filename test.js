var x1 = ""
var y1 = ""
var x2 = ""
var y2 = ""
var TabInit =   [
                ["RockB", "KnightB", "BishopB", "KingB", "QueenB", "BishopB", "KnightB", "RockB"],
                ["PawnB", "PawnB", "PawnB", "PawnB", "PawnB", "PawnB", "PawnB", "PawnB"],
                ["None", "None", "None", "None", "None", "None","None", "None", "None"],
                ["None", "None", "None", "None", "None", "None","None", "None", "None"],
                ["None", "None", "None", "None", "None", "None","None", "None", "None"],
                ["None", "None", "None", "None", "None", "None","None", "None", "None"],
                ["PawnW", "PawnW", "PawnW", "PawnW", "PawnW", "PawnW", "PawnW", "PawnW"],
                ["RockW", "KnightW", "BishopW", "KingW", "QueenW", "BishopW", "KnightW", "RockW"]
                ]

function moovements(x) {
    if (x1 == "") {
        x1 = coX(x)
        y1 = coY(x)
    } 
    alert(x1,x2)
}

function coX(x) {
    alert(x.rowIndex);
    return x.rowIndex;
  }

  function coY(x) {
      alert(x.cellIndex);
    return x.cellIndex;
  }
