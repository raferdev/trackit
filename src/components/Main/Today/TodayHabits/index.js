import { ReactComponent as CheckLogo } from "../../../../assets/img/checkbox.svg";
import styled from "styled-components";
export default function TodayHabits({habit, CheckUncheck}) {
    const curDays = habit.currentSequence;
    const higDays = habit.highestSequence;
    const seqAtual =
      curDays > 1 || curDays === 0 ? `${curDays} dias` : `${curDays} dia`;
    const record =
      higDays > 1 || higDays === 0 ? `${higDays} dias` : `${higDays} dia`;
    function doneOrNot(id,done) {
        if(done) {
            CheckUncheck(id,false);
        } else {
            CheckUncheck(id,true);
        }
    }
    return (
      <HabitDiv fill={habit.done ? "#8FC549" : "#EBEBEB"}>
        <TextDiv>
          <H2>{habit.name}</H2>
          <H3>
            Sequência atual:
            <Strong color={habit.done ? "#8FC549" : "#666666;"}>
              {seqAtual}
            </Strong>
          </H3>
          <H3>
            Seu recorde:
            <Strong
              color={
                curDays >= higDays && curDays !== 0
                  ? "#8FC549"
                  : "#666666;"
              }
            >
              {record}
            </Strong>
          </H3>
        </TextDiv>
        <div onClick={()=>doneOrNot(habit.id,habit.done)}>
        <CheckLogo/>
        </div>
      </HabitDiv>
    );
}
const HabitDiv = styled.header`
  display: flex;
  padding: 13px 11px 13px 15px;
  width: 100%;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  justify-content: space-between;
  margin-bottom: 8px;
  .ionicon {
    width: 69px;
    height: 69px;
    fill: ${(props) => props.fill};
  }
`;
const H2 = styled.h2`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
`;
const TextDiv = styled.div``;
const Strong = styled.div`
  margin-left: 5px;
  color: ${(props) => props.color};
`;
const H3 = styled.h3`
  display: flex;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;
  color: #666666;
`;