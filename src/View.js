const View = {
  render({minutes, seconds}) {
    document.body.innerHTML = `<p>Next Post In</p>
    <span>${minutes}:${seconds}</span>`;
  }
}
//Comment
export { View };