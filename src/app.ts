class Department {
  // private readonly id: string
  // name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if(name === 'Max') {
      return
    }
    this.employees.push(name);
  }

}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = "Anna"

it.describe();
it.printEmployeeInformation();

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Something");
accounting.printReports();

accounting.addEmployee('Max')
accounting.addEmployee('Manu')
accounting.printEmployeeInformation()

// const accountingCopy = {name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
