const base64 = `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`;
export default `data:image/png;base64,${base64}`;