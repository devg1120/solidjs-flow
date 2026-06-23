import { createEffect, createSignal } from "solid-js";
import { SolidFlow } from "solid-flow";
import styles from "./styles.module.css";

const initialNodes = [
    {
        id: "node-1",
        position: { x: 50, y: 100 },
        data: {
            content: <p>This is a simple node</p>,
        },
        inputs: 0,
        outputs: 1,
    },
    {
        id: "node-2",
        position: { x: 350, y: 100 },
        data: {
            label: "Node with label",
            content: <p>This is a node with a label</p>,
        },
        inputs: 1,
        outputs: 0,
    },
];

const initialEdges = [
    {
        id: "edge_node-1:0_node-2:0",
        sourceNode: "node-1",
        sourceOutput: 0,
        targetNode: "node-2",
        targetInput: 0,
    },
];

export const Example = () => {
    const [nodes, setNodes] = createSignal(initialNodes);
    const [edges, setEdges] = createSignal(initialEdges);

    return (
        <div class={styles.main}>
            <SolidFlow
                nodes={nodes()}
                edges={edges()}
                onNodesChange={(newNodes) => {
                    setNodes(newNodes);
                }}
                onEdgesChange={(newEdges) => {
                    setEdges(newEdges);
                }}
            />
        </div>
    );
};
