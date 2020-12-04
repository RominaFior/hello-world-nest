export class RandomHelper {
  static getRandomArbitrary(min, max): number {
    return parseInt(Math.random() * (max - min) + min);
  }

  static getRandomDate(): string {
    const day = this.getRandomArbitrary(1, 31);
    const month = this.getRandomArbitrary(1, 12);
    const year = this.getRandomArbitrary(1, 50);
    return `${year}y${month}m${day}d`;
  }
}
