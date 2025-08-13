import BlankCell from "./BlankCell";
import LetterCell from "./LetterCell";
import "./CrosswordGrid.css";
import { data } from "./CrosswordData.ts";
export default function CrosswordGrid() {

  const dataAnswer = data.playerAnswer.map((answer) => answer);

  return (
    <>
      <div className="crossword">
        <LetterCell letter={dataAnswer[0][0]} number="1" />
        <LetterCell letter={dataAnswer[0][1]} number="2" />
        <LetterCell letter={dataAnswer[0][2]} number="3" />
        <LetterCell letter={dataAnswer[0][3]} number="4" />
        <BlankCell blank={dataAnswer[0][4]} />
        <BlankCell blank={dataAnswer[0][5]} />
        <LetterCell letter={dataAnswer[1][0]} number="5" />
        <LetterCell letter={dataAnswer[1][1]} number="6" />
        <LetterCell letter={dataAnswer[1][2]} number="7" />
        <LetterCell letter={dataAnswer[1][3]} number="8" />
        <LetterCell letter={dataAnswer[1][4]} number="9" />
        <BlankCell blank={dataAnswer[1][5]} />
        <BlankCell blank={dataAnswer[2][0]} />
        <LetterCell letter={dataAnswer[2][1]} number="10" />
        <LetterCell letter={dataAnswer[2][2]} number="11" />
        <LetterCell letter={dataAnswer[2][3]} number="12" />
        <LetterCell letter={dataAnswer[2][4]} number="13" />
        <LetterCell letter={dataAnswer[2][5]} number="14" />
        <BlankCell blank={dataAnswer[3][0]} />
        <BlankCell blank={dataAnswer[3][1]} />
        <LetterCell letter={dataAnswer[3][2]} number="15" />
        <LetterCell letter={dataAnswer[3][3]} number="16" />
        <LetterCell letter={dataAnswer[3][4]} number="17" />
        <LetterCell letter={dataAnswer[3][5]} number="18" />
      </div>
    </>
  );
}