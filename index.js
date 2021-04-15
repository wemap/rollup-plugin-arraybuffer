const { readFileSync } = require('fs');
const { createFilter } = require('@rollup/pluginutils');

const template = (base64) => `
function base64ToBuffer(base64) {
    const binary = window.atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; ++i) { bytes[i] = binary.charCodeAt(i); }
    return bytes.buffer;
}
export default base64ToBuffer("${base64}");
`;

module.exports = function arraybuffer(options) {
    const {
        include,
        exclude
    } = options;

    const filter = createFilter(include, exclude);

    return {
        name: 'arraybuffer',

        transform(_, id) {
            if (!filter(id)) {
                return null;
            }

            const base64 = readFileSync(id, { encoding: 'base64' });
            return {
                code: template(base64),
                map: { mappings: '' }
            };
        }
    };
}
