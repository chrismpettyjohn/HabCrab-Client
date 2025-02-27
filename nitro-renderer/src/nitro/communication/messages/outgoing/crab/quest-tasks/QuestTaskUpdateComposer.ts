import { IMessageComposer } from "../../../../../../api";

export class QuestTaskUpdateComposer implements IMessageComposer<ConstructorParameters<typeof QuestTaskUpdateComposer>> {
  private _data: ConstructorParameters<typeof QuestTaskUpdateComposer>;

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
