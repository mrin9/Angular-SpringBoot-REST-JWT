/*******************************************************************************
   Description: Script to create Database tables, views and associations.
   Author: Mrinmoy Majumdar
********************************************************************************/

/*
Conventions
- all table and column names are small case and words are seperated by underscore
- all tables names must be singular (eg: service instead of services)
- all primary key values are lowercase and words are seperated by underscore (good practice to put a readable value rather than a cryptic code like 'A1' or '1', makes data debugging, auditing much easy)

- Standard Field Sizes
  - 'id' fields are nvarchar(20)
  - 'name' fields are nvarchar(50)
  - 'description' fields are nvarchar(150)

*/

/*******************************************************************************
   Drop database if it exists
********************************************************************************/
/* DROP DATABASE IF EXISTS `cas`; */

/*******************************************************************************
   Create database
********************************************************************************/
/*
CREATE DATABASE `cas`;
USE `cas`;
*/
/*
CREATE SCHEMA `demo`;
USE `demo`;
*/


/*******************************************************************************
   Create Tables
********************************************************************************/

/******** START  ::  MASTER DATA ********/
/*

 1. Supported Platforms
 2. Supported Services      (Each Service belongs to a Supported Platform )
 3. Service Categories      (Email, Drive, Network, Identity etc)
 4. Fields                  (Each Field is associated with Service Category, It defines the list of applicable fields for a service category)
 5. Operators               (Operators Thats used in creating a rule )
 6. Actions                 (List of available actions)
*/

/* List of supported platforms */
CREATE TABLE supported_platform (
    id    INT     NOT NULL,
    name  NVARCHAR(50) NOT NULL,
    CONSTRAINT pk_supported_platform PRIMARY KEY(id)
);

/* Each Service belongs to a service_category */
CREATE TABLE supported_service (
    id          INT     NOT NULL,
    name        NVARCHAR(50) NOT NULL,
    description NVARCHAR(150),
    supported_platform_id INT, /* fk supported_platform(id)*/
    CONSTRAINT pk_supported_service PRIMARY KEY(id)
);

CREATE TABLE service_category (
    id    INT     NOT NULL,
    name  NVARCHAR(50) NOT NULL,
    CONSTRAINT pk_service_category PRIMARY KEY(id)
);

/* Defines allowed fields for a service_category */
CREATE TABLE field (
    id       INT     NOT NULL,
    name     NVARCHAR(50) NOT NULL,
    service_category_id   INT, /* fk service_category(id)*/
    CONSTRAINT pk_field PRIMARY KEY(id)
);

CREATE TABLE operator (
    id             INT     NOT NULL,
    name           NVARCHAR(50) NOT NULL,
    argument_count INT,
    CONSTRAINT pk_operator PRIMARY KEY(id)
);

CREATE TABLE action (
    id    INT     NOT NULL,
    name  NVARCHAR(50) NOT NULL,
    type  NVARCHAR(50) ,
    CONSTRAINT pk_action PRIMARY KEY(id)
);

/******** START :: Users, Security Provider, Customer and Services ********/
/*
    1. Users
    2. Security Provider
    3. Customer          (Each customer is associated with a security provider)
    4. Managed Platforms (Each Managed platform is associated with a Customer)
    5. Managed Services  (Each Managed Service is associated with a Platform)
*/

CREATE TABLE user (
    user_id     NVARCHAR(20) NOT NULL,
    password    NVARCHAR(20) NOT NULL,
    first_name  NVARCHAR(50) ,
    last_name   NVARCHAR(50) ,
    email       NVARCHAR(70) ,
    security_provider_id INT ,
    default_customer_id  INT ,
    company     NVARCHAR(50) ,
    phone       NVARCHAR(20) ,
    address1    NVARCHAR(100),
    address2    NVARCHAR(100),
    country     NVARCHAR(20) ,
    postal      NVARCHAR(20) ,
    role        NVARCHAR(20) ,
    other_roles NVARCHAR(80) ,
    is_active   TINYINT  ,
    is_blocked  TINYINT  ,
    secret_question     NVARCHAR(100),
    secret_answer       NVARCHAR(100),
    enable_beta_testing TINYINT,
    enable_renewal      TINYINT,
    CONSTRAINT user_id PRIMARY KEY(user_id)
);

CREATE TABLE security_provider (
    id          INT           NOT NULL,
    name        NVARCHAR(50)  NOT NULL,
    description NVARCHAR(150),
    CONSTRAINT pk_security_provider PRIMARY KEY(id)
);

/* Each customer is associated with a security provider */
CREATE TABLE customer (
    id               INT          NOT NULL,
    name             NVARCHAR(50) NOT NULL,
    description      NVARCHAR(150),
    customer_code    NVARCHAR(3),
    security_provider_id INT, /* fk security_provider(id) */
    CONSTRAINT pk_customer PRIMARY KEY(id)
);

/* Each customer can have one or more managed platforms */
CREATE TABLE managed_platform (
    id           INT           NOT NULL,
    domain       NVARCHAR(255),
    client_id    NVARCHAR(50),
    client_key   NVARCHAR(50),
    supported_platform_id  INT,  /* fk supported_platform(id)*/
    customer_id  INT,                 /* fk customer(id)*/
    CONSTRAINT  pk_managed_platform PRIMARY KEY(id)
);

/* Each managed platforms can have one or more managed services */
CREATE TABLE managed_service (
    id                    INT          NOT NULL,
    subscription_id       INT,
    managed_platform_id   INT,      /* fk managed_platform(id)*/
    supported_service_id  INT, /* fk supported_service(id)*/
    CONSTRAINT pk_managed_service PRIMARY KEY(id)
);


/******** START :: Security Provider, Customer, Managed Services and Managed Platforms ********/
/*
  1. Rule Enforcement Points (Defines the enforcement point for a service caregory)
  2. Rule Enforcement Point Actions (Each Action is associated with Enforcement Point, It defines the list of applicable Actions for a Enforcement Point)
  3. Policies  (Each policy have one or more rules)
  4. Rules     (Each rule is associated with a Policy, Managed Service and a Enforcement Point)
              - Get the Service Category from Managed Service and findout the applicable fields for this Rule
              - Enforcement Point defines available Actions for the rule

*/
CREATE TABLE rule_enforcement_point (
    id                    INT           NOT NULL,
    name                  NVARCHAR(50)  NOT NULL,
    service_category_id   INT,     /* fk service_category(id)*/
    CONSTRAINT pk_rule_enforcement_point PRIMARY KEY(id)
);

/* Defines allowed actions for a rule_enforcement_point */
CREATE TABLE rule_enforcement_point_action_association (
    rule_enforcement_point_id INT  NOT NULL,  /* fk rule_enforcement_point(id)*/
    action_id                 INT  NOT NULL,  /* fk action(id)*/
    CONSTRAINT rule_enforcement_point_action_association PRIMARY KEY(rule_enforcement_point_id, action_id)
);

CREATE TABLE policy_type (
    id            INT      NOT NULL,
    name          NVARCHAR(50)  NOT NULL,
    CONSTRAINT    pk_type_category PRIMARY KEY(id)
);

CREATE TABLE policy (
    id             INT           NOT NULL,
    name           NVARCHAR(50)  NOT NULL,
    description    NVARCHAR(150),
    state          NVARCHAR(20), /* ENUM('ACTIVE', 'INACTIVE'), */
    severity       NVARCHAR(20), /* ENUM('ALERT', 'INFO', 'WARNING', 'CRITICAL'),*/
    created_by     NVARCHAR(20),
    updated_by     NVARCHAR(20),
    created        DATETIME,
    updated        DATETIME,
    policy_type_id INT ,     /* fk policy_type(id)*/
    customer_id    INT ,     /* fk customer(id) */
    CONSTRAINT  pk_policy PRIMARY KEY(id)
);

CREATE TABLE rule (
    id             INT          NOT NULL,
    name           NVARCHAR(50) NOT NULL,
    description    NVARCHAR(150),
    created_by     NVARCHAR(20),
    updated_by     NVARCHAR(20),
    created        DATETIME,
    updated        DATETIME,
    policy_id                 INT, /* fk */
    rule_enforcement_point_id INT, /* fk */
    managed_service_id        INT, /* fk */
    CONSTRAINT  pk_rule PRIMARY KEY(id)
);

CREATE TABLE rule_condition (
    id                INT NOT NULL,
    description       NVARCHAR(150),
    value1            NVARCHAR(150),
    value2            NVARCHAR(150),
    rule_id           INT ,          /* fk rule(id) */
    field_id          INT ,          /* fk */
    operator_id       INT ,          /* fk */
    CONSTRAINT  pk_rule_condition PRIMARY KEY(id)
);

CREATE TABLE rule_action (
    rule_id          INT          , /* fk rule(id) */
    action_id        INT , /* fk action(id)*/
    value1           NVARCHAR(150),
    value2           NVARCHAR(150),
    CONSTRAINT  pk_rule_action PRIMARY KEY(rule_id, action_id)
);

CREATE TABLE incident (
    id             INT  ,
    policy_id      INT  ,   /* fk policy(id) */
    event_id       NVARCHAR(20)  ,
    status         NVARCHAR(20), /* ENUM('NEW', 'IN_PROGRESS', 'DISMISSED', 'RESOLVED'), */
    owner_name     NVARCHAR(100) ,
    owner_email    NVARCHAR(100) ,
    platform_user  NVARCHAR(100) ,
    details        NVARCHAR(4096) ,
    detected_on    DATETIME,
    CONSTRAINT     pk_incident PRIMARY KEY(id)
);


/******** END :: Policy, Rules, Actions and Services ********/

/*******************************************************************************
   Create Foreign Keys
********************************************************************************/
ALTER TABLE supported_service       ADD CONSTRAINT fk_supported_platform_id          FOREIGN KEY (supported_platform_id)     REFERENCES supported_platform(id);
ALTER TABLE field                   ADD CONSTRAINT fk_field_service_category_id      FOREIGN KEY (service_category_id)       REFERENCES service_category(id);

ALTER TABLE customer                ADD CONSTRAINT fk_customer_security_provider_id  FOREIGN KEY (security_provider_id)      REFERENCES security_provider(id);
ALTER TABLE managed_platform        ADD CONSTRAINT fk_mng_platform_platform_id       FOREIGN KEY (supported_platform_id)     REFERENCES supported_platform(id);
ALTER TABLE managed_platform        ADD CONSTRAINT fk_mng_platform_customer_id       FOREIGN KEY (customer_id)               REFERENCES customer(id);
ALTER TABLE managed_service         ADD CONSTRAINT fk_mng_service_mng_platform_id    FOREIGN KEY (managed_platform_id)       REFERENCES managed_platform(id);
ALTER TABLE managed_service         ADD CONSTRAINT fk_mng_service_service_id         FOREIGN KEY (supported_service_id)      REFERENCES supported_service(id);


ALTER TABLE rule_enforcement_point  ADD CONSTRAINT fk_rule_service_category_id             FOREIGN KEY (service_category_id)       REFERENCES service_category(id);
ALTER TABLE rule_enforcement_point_action_association  ADD CONSTRAINT fk_rule_enf_point_id FOREIGN KEY (rule_enforcement_point_id) REFERENCES rule_enforcement_point(id);
ALTER TABLE rule_enforcement_point_action_association  ADD CONSTRAINT fk_action_id         FOREIGN KEY (action_id)           REFERENCES action(id);
ALTER TABLE policy                  ADD CONSTRAINT fk_policy_policy_type             FOREIGN KEY (policy_type_id)            REFERENCES policy_type(id);
ALTER TABLE policy                  ADD CONSTRAINT fk_policy_customer                FOREIGN KEY (customer_id)               REFERENCES customer(id);
ALTER TABLE rule                    ADD CONSTRAINT fk_rule_policy_id                 FOREIGN KEY (policy_id)                 REFERENCES policy(id);
ALTER TABLE rule                    ADD CONSTRAINT fk_rule_rule_enforcement_point_id FOREIGN KEY (rule_enforcement_point_id) REFERENCES rule_enforcement_point(id);
ALTER TABLE rule                    ADD CONSTRAINT fk_rule_managed_service_id        FOREIGN KEY (managed_service_id)        REFERENCES managed_service(id);

ALTER TABLE rule_condition          ADD CONSTRAINT fk_rule_condition_rule_id         FOREIGN KEY (rule_id)                   REFERENCES rule(id);
ALTER TABLE rule_condition          ADD CONSTRAINT fk_rule_condition_field_id        FOREIGN KEY (field_id)                  REFERENCES field(id);
ALTER TABLE rule_condition          ADD CONSTRAINT fk_rule_condition_operator_id     FOREIGN KEY (operator_id)               REFERENCES operator(id);

ALTER TABLE rule_action             ADD CONSTRAINT fk_rule_action_rule_id            FOREIGN KEY (rule_id)                   REFERENCES rule(id);
ALTER TABLE rule_action             ADD CONSTRAINT fk_rule_action_action_id          FOREIGN KEY (action_id)                 REFERENCES action(id);


/* Views */
CREATE OR REPLACE VIEW incident_detail AS
SELECT DISTINCT
i.id AS incident_id,
i.policy_id,
i.detected_on,
i.event_id,
i.owner_email,
i.owner_name,
i.platform_user,
i.status   AS status,
pt.name    AS policy_type,
p.severity ,
c.name     AS customer_name,
c.security_provider_id,
c.id       AS customer_id,
sp.name    AS security_provider_name,
splat.name AS platform_name
 FROM incident i, policy p, policy_type pt, customer c , security_provider sp , rule r, managed_service ms,supported_service ss, supported_platform splat
WHERE i.policy_id              = p.id
  AND p.customer_id            = c.id
  AND c.security_provider_id   = sp.id
  AND p.policy_type_id         = pt.id
  AND r.policy_id              = p.id
  AND r.managed_service_id     = ms.id
  AND ms.supported_service_id  = ss.id
  AND ss.supported_platform_id = splat.id;

CREATE OR REPLACE VIEW policy_detail AS
SELECT
p.id       AS policy_id,
p.name     AS policy_name,
pt.name    AS policy_type,
p.state    AS policy_state,
p.severity AS severity,
r.id       AS rule_id,
r.name     AS rule_name,
c.id       AS customer_id,
c.name     AS customer_name,
c.security_provider_id,
rc.description AS rule_condition,
f.name     AS field_name,
o.name     AS operator,
rc.value1  AS value1,
rc.value2  AS value2
 FROM rule r, policy p, policy_type pt, field f, operator o, rule_condition rc, customer c , security_provider sp
WHERE r.policy_id      = p.id
  AND p.policy_type_id = pt.id
  AND p.customer_id    = c.id
  AND c.security_provider_id   = sp.id
  AND r.id             = rc.rule_id
  AND rc.field_id      = f.id
  AND rc.operator_id   = o.id;

CREATE OR REPLACE VIEW user_view AS
SELECT user_id, password, first_name, last_name, email, role, is_active, is_blocked,  u.security_provider_id ,u.default_customer_id AS customer_id, sp.name AS security_provider, c.name AS customer
  FROM user u, customer c, security_provider sp
 WHERE u.default_customer_id = c.id
   AND u.security_provider_id = sp.id;
