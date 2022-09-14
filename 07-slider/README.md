## Summary

A reviews sliders with 

- Click the right/left button to show the next/previous slider.

- Use `setInterval()` to make slider automatically changes.

- If clicking the right/left buttons, clean previous `setInterval()`.

![]()

Ref: [Gatsby-Airtable Project](https://gatsby-airtable-design-project.netlify.app/)

## File structure

```
```

## Notes

### 1. Display all sliders with flex to make them in the same row and use CSS `transform: translateX();` to adjust the position of every slider.

### 2. Add class with 'lastSlide', 'activeSlide' and 'nextSlide', it represent from left, middle, and to the right.

### 3. Put all slides in the right hand side first, when the person index matches the index state, change class of the person index from 'nextSlide' into 'activeSlide'

### 4. Use `setIndex(index - 1)` and `setIndex(index + 1)` to switch the slides, and `useEffect()` to control the edge case:

```javascript
useEffect(() => {
  const lastIndex = people.length - 1;
  if (index < 0) {
    setIndex(lastIndex);
  }

  if (index > lastIndex) {
    setIndex(0);
  }
}, [index, people]);
```

### 5. `setInterval()` with index + 1 to make the slides move automatically

```javascript
useEffect(() => {
  setInterval(() => {
    setIndex(index + 1);
  }, 3000);
}, [index]);
```

### 6. Get [Return value](https://developer.mozilla.org/en-US/docs/Web/API/setInterval#return_value) from `setInterval()` and when clicking the next or prev button, it cleared the previous `setInterval(`) by `clearInterval()`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
