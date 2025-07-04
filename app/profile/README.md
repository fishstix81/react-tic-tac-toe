Given an organization represented as a tree structure and a
list of employee names, return the department name that is the lowest common
ancestor of all the given employees. You need to implement a function to find this lowest common ancestor node.

Input:

A dictionary representing the tree structure, 
where keys are department names and values are lists of direct sub-departments or employees.

A list of employee names, all existing in the organization.

Output:
		A string representing the lowest common department name.

Extended Question: How to handle it if an employee can belong to multiple different departments?

Example:

Input:
```python
{ 
	"Company":["HR", "Engineering"],
	"HR": ["Recruitment", "Training"],
	"Engineering": ["Software", "Hardware"],
	"Training": ["Alice", "Bob"],
	"Software": ["Bob", "Charlie"]
} 
["Alice", "Bob"]
```

Output: "Training"