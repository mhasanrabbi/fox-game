const gameState = {
  current: "INIT",
  clock: 1,
  tick() {
    this.clock++;
    console.log(this.colck);
    return this.clock;
  },
};

export default gameState;
