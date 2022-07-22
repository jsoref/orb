import { INodeBase } from '../../../../models/node';
import { IEdgeBase } from '../../../../models/edge';
import { drawStar } from '../utils/shapes';
import { NodeCanvas } from '../base';

export class NodeStarCanvas<N extends INodeBase, E extends IEdgeBase> extends NodeCanvas<N, E> {
  protected override drawShape(context: CanvasRenderingContext2D) {
    const center = this.node.getCenter();
    const radius = this.node.getRadius();
    drawStar(context, center.x, center.y, radius);
  }
}
