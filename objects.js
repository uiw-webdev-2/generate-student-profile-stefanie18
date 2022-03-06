import object from "./object";

const objectInfo = information(
    "Stefanie",
    "perez",
    "email",
    "incarnate word",
    "senior",
);

const content = `<main>
<article>
  <h1>${objectInfo.name}</h1>
  <ul>
    <li>lastName: ${objectInfo.lastName}</li>
    <li> email: ${objectInfo.email} </li>
    <li>PIDM: ${objectInfo.PIDM} </li>
    <li>school:${objectInfo.school}</li>
    <li>gradeClassification: ${objectInfo.gradeClassification}</li>
  </ul>
</article>
</main>`;

document.body.innerHTML = content;