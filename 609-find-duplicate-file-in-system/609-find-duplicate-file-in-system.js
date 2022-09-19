/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const contentToPath = {}
    
    paths.forEach((path) => {
        const [directory, ...files] = path.split(' ')
        
        files.forEach((file) => {
            const [fileName, contents] = file.split('(')
            const filePath = directory + '/' + fileName
            
            if (contentToPath[contents]) {
                contentToPath[contents].push(filePath)
            } else {
                contentToPath[contents] = [filePath]
            }
        })
    })
    
    return Object.values(contentToPath).filter((paths) => paths.length > 1)
};