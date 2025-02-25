import { IMessageComposer } from "../../../../../../api";

export class TrackerCreateComposer implements IMessageComposer<ConstructorParameters<typeof TrackerCreateComposer>> {
  private _data: ConstructorParameters<typeof TrackerCreateComposer>;

  constructor(key: string, title: string, description: string) {
    this._data = [key, title, description];
  }

  public getMessageArray() {
    return this._data;
  }

  public dispose(): void {
    return;
  }
}
