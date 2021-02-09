DROP TABLE IF EXISTS Templates, Clients, Invoices;

CREATE TABLE Templates (
  template_id INT NOT NULL AUTO_INCREMENT,
  template_name VARCHAR(50),
  template_amount VARCHAR(50),
  product_service VARCHAR(50),
  template_description VARCHAR(500),
  PRIMARY KEY (template_id)
);

CREATE TABLE Clients (
  client_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  address VARCHAR(100),
  city VARCHAR(50),
  county VARCHAR(50),
  state VARCHAR(50),
  zip VARCHAR(50),
  phone1 VARCHAR(50),
  phone2 VARCHAR(50),
  email VARCHAR(50),
  PRIMARY KEY (client_id)
);

CREATE TABLE Invoices (
  invoice_id INT NOT NULL AUTO_INCREMENT,
  date VARCHAR(50),
  client_name VARCHAR(50),
  client_id INT NOT NULL,
  paid_unpaid VARCHAR(50),
  date_owed VARCHAR(50),
  scheduled_inprogress_complete VARCHAR(50),
  template_id INT NOT NULL,
  extras VARCHAR(100),
  notes VARCHAR(500),
  PRIMARY KEY (invoice_id),
  FOREIGN KEY (client_id) REFERENCES Clients (client_id), 
  FOREIGN KEY(template_id) REFERENCES Templates (template_id)
);
