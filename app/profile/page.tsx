"use client";

const company = {
  Company: ["HR", "Engineering"],
  HR: ["Recruitment", "Training"],
  Engineering: ["Software", "Hardware"],
  Training: ["Alice", "Bob"],
  Software: ["Bob", "Charlie"],
};

const input = ["Alice", "Bob"];

export default function Profile() {
  const getDepartment = (): string => {
    let result = "";
    const search: string[] = [];
    const queue: string[] = [...input];

    while (queue.length > 0) {
      const current = queue.shift();
      Object.keys(company).forEach((key) => {
        const val = company[key as keyof typeof company];
        if (val.includes(current as string)) {
          search.push(key);
        }
      });
    }

    if (search.length > 0) {
      if (search.length > 1) {
        const dup = new Set();
        search.forEach((item) => {
          if (!dup.has(item)) {
            dup.add(item);
          } else {
            result = item;
          }
        });
      } else {
        result = search[0];
      }
    }

    return result;
  };

  const output = getDepartment();

  return (
    <div>
      <main>
        <div>{output}</div>
      </main>
    </div>
  );
}
