
```sql
WHERE age = 21
```

```js
where: { age: 21 }
```

```sql
WHERE age > 21 
```
```js
where: { age: { [Op.gt]: 21 } }
```

```sql
WHERE age > 21 AND name LIKE 'R%' 
```

```js
where: {
	[Op.and]: [
		{ age: { [Op.gt]: 21 } },
		{ name: { [Op.like]: 'R%' } }
	]
}
```

```sql
WHERE age > 21 AND (name LIKE 'R%' or name LIKE 'P%')
```

```js
where: {
	[Op.and]: [
		{ age: { [Op.gt]: 21 } },
		{ [Op.or]: [
			{ name: { [Op.like]: 'R%' } },
			{ name: { [Op.like]: 'P%' } }
		] }
	]
}
```




