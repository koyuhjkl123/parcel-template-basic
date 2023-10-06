// ESM
// CommonJS

// import autoprefixer from 'autoprefixer' 동일
// require() 노드 js

// export {
//     Plugin: [
//         autoprefixer
//     ]
// }
// module.exports 노드 js
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}