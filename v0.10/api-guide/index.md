# froxlor API guide

<div class="bg-yellow-200 text-grey-dk-300 p-3 mt-3"><b>Note:</b> The API interface is <b>disabled</b> by default. If you wish to use it or allow your customers to access data using the API, you need to enable it in <code>Settings -> System settings -> Enable external API usage</code>.</div>

## 1. Introduction

Froxlor provides an API interface to access various functions like adding customers, domains, e-mails, etc. In order to use the API the user (admin, reseller or customer) needs to create an <b>API-key / secret</b> pair from within the froxlor interface. If enabled, you can find that in the top-right corner `options` menu and select `API keys`.

Click on `Add new key` and a new key/secret pair will be genereated. You can add as many as you like. A `click` on a  specific row reveals the full key and secret.

You can also specify IP-addresses to require a specific origin and a date if you want to limit the key/secret pair usage for a time-period.

The <b>API endpoint</b> is `https://your-hostname.tld/api.php`. As froxlor's API is not a RESTful API, all commands are called via HTTP <b>POST</b> with a `application/json` content-type.

## 2. Request structure/layout

A request to the API endpoint has the following structure:

```php
[
	'header' => [
		'apikey' => 'your api key',
		'secret' => 'your api secret'
	],
	'body' => [
		'command' => 'Command',
		'params => [
			// optional parameters to the given command
		]
	]
]
```

<b>Attention:</b> The whole request-array in terms of HTTP is the _body_. There are no HTTP-headers required. The request must be sent as <b>JSON</b>-encoded string.

## 3. Send a request via cURL

To test the setup, we can call the `Froxlor.listFunctions` API command which will show us the available API methods using <b>curl</b>.

### 3.1 Verbose output

When testing, it’s a good idea to set the verbose mode on to provide helpful information, like headers. For this, use the `-v` parameter:

```shell
curl -v -H "Content-Type: application/json" "https://your-hostname.tld/api.php" -d '{...}'
```

### 3.2 Listing functions

Now that we have our key and secret, let's JSON-encode our PHP request-array:

```shell
php -r "echo json_encode(['header'=>['apikey'=>'your api key','secret'=>'your api secret'],'body'=>['command'=>'Froxlor.listFunctions']]);"
```

The output should look like this:

```json
{"header":{"apikey":"your api key","secret":"your api secret"},"body":{"command":"Froxlor.listFunctions"}}
```

This string is now being passed with the `-d` parameter in curl to the given API endpoint:

```shell
curl -v -H "Content-Type: application/json" "https://your-hostname.tld/api.php" -d '{"header":{"apikey":"your api key","secret":"your api secret"},"body":{"command":"Froxlor.listFunctions"}}'
```

The result should then look somewhat like this (removed headers and actual data for readability):

```
{
    "status": 200,
    "status_message": "successful",
    "data": [
		{
			"module": "SomeModule",
			"function": "someFunction",
			"params": [...]
		},
		{...}
	]
}
```

## 4. Usage with PHP

In the froxlor repository, we provide an example class / curl-wrapper to work with the API. See [https://github.com/Froxlor/Froxlor/tree/master/doc/example](https://github.com/Froxlor/Froxlor/tree/master/doc/example)

## 5. Response structure/layout

A response from the API endpoint has the following structure:

```php
[
	'status' => 200,
	'status_message' => 'a status message',
	'data' => [...]
]
```

All status-codes above or equal to **400** can be considered as an **error** and the `data` field will be empty/null. The error message can be read from the `status_message` field.

On success, the `data` field contains the corresponding result as array. All `listing` methods will always have a data-structure in the format shown below. The `get`, `add`, `update` and `delete` methods with return a single entry and do not include _count_ and _list_ indeces.

Listing response:
```php
[
	'status' => 200,
	'status_message' => 'success',
	'data' => [
		'count' => number-of-entries,
		'list' => [
			{array-of-entries}
		]
	]
]
```

Single entity response:
```php
[
	'status' => 200,
	'status_message' => 'success',
	'data' => [
		entity-data
	]
]
```