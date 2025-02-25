import { IMessageComposer } from "../../../../../../api";

export class QuestUpdateComposer implements IMessageComposer<ConstructorParameters<typeof QuestUpdateComposer>> {
  private _data: ConstructorParameters<typeof QuestUpdateComposer>;

  constructor(questId: number, parentId: number, title: string, description: string) {
    this._data = [questId, parentId, title, description];
  }

  public getMessageArray() {
    return this._data;
  }

  public dispose(): void {
    return;
  }
}
