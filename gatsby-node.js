/* 動的なページの作成 */
module.exports = ({ actions }) => {
    const { createPage } = actions;
    createPage({
        path: "/article",
        component: Article,
        context: {
            id: "332"
        }
    });
}