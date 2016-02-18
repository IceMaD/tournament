import {NodeModel} from "../Models/NodeModel";
import {TeamModel} from "../Models/TeamModel";

export class TreeManager {

  private static _nodes: NodeModel[] = [];

  static buildTree(teamList: TeamModel[]): NodeModel {

    let countOf = {
      teams: teamList.length,
      nodes: (teamList.length * 2) - 1,
    };

    let nodes: NodeModel[] = [];

    for (let i:number = 0; i < countOf.nodes; i++) {
      let node = new NodeModel();
      nodes.push(node);

      if (nodes.length > 1) {
        let positionOfParent: number = Math.floor(nodes.length/2) - 1;
        let parent: NodeModel = nodes[positionOfParent];
        parent.addChild(node);
      }

      if (countOf.nodes - i <= countOf.teams) {
        node.setTeam(teamList[i+1 - countOf.teams]);
      }
    }

    this._nodes = this._nodes.concat(nodes);

    return nodes[0];
  }

  static findParentOf(nodeTofind: NodeModel): NodeModel|boolean {

    // For each node
    for (let i:number = 0; i < this._nodes.length; i++) {
      let node = this._nodes[i];

      // For each children of the node
      for (let j = 0; j < node.children.length; j++) {
        let child:NodeModel = node.children[j];

        // If the child match, return the parent
        if (child.id === nodeTofind.id) {
          return node;
        }
      }
    }

    return false;
  }

  static forEachNode(callback: Function): void {
    for (let i:number = 0; i < this._nodes.length; i++) {
      let node: NodeModel = TreeManager._nodes[i];

      callback(node);
    }
  }
}
