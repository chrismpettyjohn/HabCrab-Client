import { IMessageComposer } from "../../../../../../api";

export class QuestCreateComposer implements IMessageComposer<ConstructorParameters<typeof QuestCreateComposer>> {
  private _data: ConstructorParameters<typeof QuestCreateComposer>;

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
