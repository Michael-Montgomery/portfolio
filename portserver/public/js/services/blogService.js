var app = angular.module('launch.blogService', []);

app.service('blogDB', function() {
    this.blogList = [
        {
            date: new Date(2016, 03, 29),
            title: 'This is a modified test title!',
            post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas est turpis, at commodo " +
            "est blandit eu. Nam dolor enim, fringilla sed sodales ut, molestie nec felis. Aliquam sed metus ullamcorper," +
            " gravida orci in, tempus orci. Ut elementum nibh et porta eleifend. Quisque a ipsum accumsan, maximus nisl" +
            " sed, pharetra urna. Pellentesque nisi leo, fermentum sed ullamcorper ut, faucibus eu augue. Quisque quis" +
            " ligula in ligula hendrerit imperdiet. Cras laoreet id metus nec dictum. Nam in blandit sapien. Quisque tempus " +
            "purus sapien, eu aliquet erat commodo in. Integer feugiat posuere neque ac mollis. Vivamus nec pellentesque nunc.",
            shares:0
        },
        {
            date: new Date(2016, 05, 16),
            title: 'What the Fatherhood?',
            post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas est turpis, at commodo " +
            "est blandit eu. Nam dolor enim, fringilla sed sodales ut, molestie nec felis. Aliquam sed metus ullamcorper," +
            " gravida orci in, tempus orci. Ut elementum nibh et porta eleifend. Quisque a ipsum accumsan, maximus nisl" +
            " sed, pharetra urna. Pellentesque nisi leo, fermentum sed ullamcorper ut, faucibus eu augue. Quisque quis" +
            " ligula in ligula hendrerit imperdiet. Cras laoreet id metus nec dictum. Nam in blandit sapien. Quisque tempus " +
            "purus sapien, eu aliquet erat commodo in. Integer feugiat posuere neque ac mollis. Vivamus nec pellentesque nunc.",
            shares:0
        },
        {
            date: new Date(2016, 08, 07),
            title: "Sexy and I node.",
            post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas est turpis, at commodo " +
            "est blandit eu. Nam dolor enim, fringilla sed sodales ut, molestie nec felis. Aliquam sed metus ullamcorper," +
            " gravida orci in, tempus orci. Ut elementum nibh et porta eleifend. Quisque a ipsum accumsan, maximus nisl" +
            " sed, pharetra urna. Pellentesque nisi leo, fermentum sed ullamcorper ut, faucibus eu augue. Quisque quis" +
            " ligula in ligula hendrerit imperdiet. Cras laoreet id metus nec dictum. Nam in blandit sapien. Quisque tempus " +
            "purus sapien, eu aliquet erat commodo in. Integer feugiat posuere neque ac mollis. Vivamus nec pellentesque nunc.",
            shares:0
        }
    ]
});