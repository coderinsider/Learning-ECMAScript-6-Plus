const id = Symbol();

const courseInfo = {
  title: "JavaScript",
  topics: ["strings", "arrays", "objects", "boolean"],
  id: "js-course"
};

courseInfo[id] = 2134;
console.log(courseInfo);
