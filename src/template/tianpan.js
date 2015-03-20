/**
 * @fileOverview
 *
 * 天盘模板
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerTemplate('tianpan', {

    getLayout: function(node) {
        console.log(node)
        if (node.getData('layout')) return node.getData('layout');

        var level = node.getLevel();

        // 根节点
        if (level === 0) {
            return 'mind';
        }

        // 一级节点
        if (level === 1) {
            return node.getLayoutPointPreview().x > 0 ? 'right': 'left';
        }

        return node.parent.getLayout();
    },

    getConnect: function(node) {
        if (node.getLevel() == 1) return 'arc';
        return 'bezier';
    }
});