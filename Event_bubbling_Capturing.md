# 29 - Event Bubbling, Capturing and Delegation

## Event Bubbling

Event Bubbling is a process in which event starts from target element and propagates upwards through its ancestors.

Example

Child → Parent → Grand Parent

The event first occurs on target element and then moves upward.

## Event Capturing

Event Capturing is opposite of Event Bubbling.

Grand Parent → Parent → Child

The event travels from top to bottom.

## stopPropagation()

Used to stop propagation of events.

```js
event.stopPropagation();
```

## Event Delegation

Event Delegation is a technique of attaching event listener to a parent element instead of attaching listeners to multiple child elements.

Advantages

- Better Performance
- Less Memory Consumption
- Handles Dynamic Elements Efficiently

Event Delegation works because of Event Bubbling.