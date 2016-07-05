## GRE-Reminder-Service
I tried to find good word list API for the Pebble GRE word reminder, but I failed. So I build one myself: A simple RESTful service built for word list functionality.

## API Reference

- API Entry: [https://gre-reminder-service.herokuapp.com/word](https://gre-reminder-service.herokuapp.com/)
- Add word:
	* Method: `POST`
	* Request Params:
		- `word`: The word you want to add
- Get word:
	* Method: `GET`
	* Request Params:
		- `all`: if `true`, return an array of all the words
		- `amount`: if not `all`, specifies the amount of word get form the list
	* Response Example: `['Yanda', 'Huang', 'is', 'a', 'genius']`
- Delete word:
	* Method: `Delete`
	* Request Params:
		- `word`: The word you want to delete

#### Waitlist
- Validation
	* Is there already a word in the database?
	* Is this really a word (Call some API)
- Statistics functionality
