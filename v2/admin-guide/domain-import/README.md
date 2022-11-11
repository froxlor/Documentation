# Domain import

## 0. Abstract

The file structure/layout is based on the API parameters for [_Domains.add_](../../api-guide/commands).

## 1. Procedure/UI explanation

The **separator field** specifies the character which is used in the CSV-file to split the fields, usually this is a semicolon or a comma.

If you have headlines (besides the required first one) in your CSV file or want to specify at what position the import should start, you can use the **offset field** to tell froxlor to start reading the domains at the given position, e.g. set offset to 2 if your second row is not a domain entry but another headline.

The last part is a simple file-select-dialog. Please choose the desired CSV-file here and press **"Save"**

<UiBrowser src="/img/frx_domainimport.png" alt="Domain import"/>

## 2. File structure 

* Note: The string-fields *must not* be enclosed in quotes!
* Note: For boolean values, you should use *0* for false and *1* for true

There is no given order for the fields in the file. The first line of the file **must** be the required parameters names from [_Domains.add_](../../api-guide/commands) and of course any optional parameter you need.

## 3. Validation and counters

### 3.1 Non-fatal errors / skip of domains

The following problems will only ignore the current domain without displaying an error.

* not a valid domain (`/^http:\/\/([a-z0-9]([a-z0-9\-]{0,61}[a-z0-9])?\.)+[a-z0-9\-]{2,63}$/i`)
* the domain is equal to the system-hostname
* the domain already exists in the froxlor database
* If you do not have unlimited domain contingent, the import will stop at the maximum allowed number of domains and skip the rest
* specified `aliasdomain` is invalid (see first -> valid domain)
* specified `aliasdomain` does not exist (be sure to specify a domain that should be used as alias **before** the domain which wants to set the alias!)

### 3.2 Exceptions / abort of import

The following problems will abort the entire import:

* separator is empty or more than one character long
* given offset is < 0 or not numeric
* specified customer-id is <= 0
* no file to import given
* file could not be found (very unlikely due to upload)
* unable to open/read file (also very unlikely)
* no domains were read from the file
