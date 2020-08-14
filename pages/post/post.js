// pages/post/post.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: "Jan 28 2017",
        title: "小时候的冰棍与雪糕",
        postImg: "/images/post/post-4.jpg",
        avatar: "/images/avatar/avatar-4.png",
        content: "冰棍与雪糕绝对不是同一个东西",
        readingNum: 92,
        collectionNum: 108,
        commentNum: 7
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.setData({
            title: "一根雪糕的经济学原理"
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("post页面show")
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log("post页面hide")
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log("post页面unload")
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})