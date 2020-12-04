export class ArrayHelper {
  public static containsAllElements(
    sample: string[],
    target: string[],
  ): boolean {
    return target.every(element => sample.includes(element));
  }

  public static isEmpty(target: any[]): boolean {
    return target != null && target.length > 0;
  }
}
