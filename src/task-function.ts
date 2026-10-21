type Student = {
  name: string;
  score: number;
};

type GetResultMessage = (student: Student) => string;


const getResultMessage: GetResultMessage = (Student) => {
 if (Student.score >= 60) {
   return `${Student.name}さんは合格です。`;
 } else {
   return `${Student.name}さんは不合格です。`;
 }
};

const studentA: Student = {
 name: '侍太郎',
 score: 70,
};

let resultMessage = getResultMessage(studentA);

console.log(resultMessage);