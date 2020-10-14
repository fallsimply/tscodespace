const toolbarTags = {
	bold: "b",
	italic: "i",
	strike: "strike",
	underline: "u",
}

const getSelect = () : {begin: number, end: number, node: Node} => {
	const { anchorOffset: l, focusOffset: r, anchorNode: lNode, focusNode: rNode } = document.getSelection()
	return l < r
		? { begin: l, end: r, node: lNode }
		: { begin: r, end: l, node: rNode }
	
}

const nodeInline = (e: Event) => {
	
}

const nodeOffset = (node: Node, idx: number, offset: number = 0) : {node: Node, index: number, done?: boolean} => {
	const text   = node.nodeValue
	const start = idx - offset
	const len   = text != null 
		? text.length 
		: -1
	
	if (node.hasChildNodes()) {
		let childOffset = nodeOffset
		offset
	}



	if (start <= len && node.nodeType == node.TEXT_NODE) {
		return {
			node,
			index: start,
		}
	} else if (node.nextSibling != null) {
		return nodeOffset(node.nextSibling, idx, len)
	} else {
		return {
			node,
			index: start,
			done: false
		}
	}
}