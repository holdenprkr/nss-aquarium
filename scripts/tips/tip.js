const TipComponent = (tip) => {
  return `
  <div class="tip">
  <h4>${tip.title}</h4>
  <p>${tip.tip}</p>
</div>
  `
}

export default TipComponent