abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string
  // name: string;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    console.log(Department.fiscalYear);
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log("IT部門 - ID: " +  this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません。");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください。");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe(){
    console.log("会計部門 - ID: " +  this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = "Anna"

it.describe();
it.printEmployeeInformation();

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "通期会計レポート";

accounting.addReport("Something");

console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = {name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
