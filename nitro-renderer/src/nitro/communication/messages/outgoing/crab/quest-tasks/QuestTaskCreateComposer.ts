import { IMessageComposer } from "../../../../../../api";

export class QuestTaskCreateComposer implements IMessageComposer<ConstructorParameters<typeof QuestTaskCreateComposer>> {
  private _data: ConstructorParameters<typeof QuestTaskCreateComposer>;

  constructor(parentId: number, title: string, description: string) {
    this._data = [parentId, title, description];
  }

  public getMessageArray() {
    return this._data;
  }

  public dispose(): void {
    return;
  }
}
