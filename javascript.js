    window.onload = function() {
        // var navigation = document.getElementsByClassName("navigation");
        // // 添加head和content的class
        // for (var k = 0; k < navigation.length; k++) {
        //     navigation[k].firstElementChild.className = "nav_head";
        //     navigation[k].lastElementChild.className = "nav_content";
        // }

        var head = document.getElementsByClassName("nav_head");
        var content = document.getElementsByClassName("nav_content");

        // 添加每个head和content的第一个元素（li或div）为活动的class
        for (l = 0; l < head.length; l++) {
            head[l].firstElementChild.getElementsByTagName("li")[0].className = "oli_active";
            content[l].firstElementChild.className = "odiv_active";
        }

        //给每个标题和内容加ID
        for (var i = 0; i < head.length; i++) {
            head[i].id = "head_" + i;
            content[i].id = "menu_" + i;
        }


        function myTab(j) {
            var head_list = document.getElementById("head_" + j);
            var content_list = document.getElementById("menu_" + j);

            var oli = head_list.getElementsByTagName("li");
            var odiv = content_list.getElementsByTagName("div");

            for (var i = 0; i < oli.length; i++) {
                oli[i].index = i; //定义index变量，以便让tab按钮和tab内容相互对应
                oli[i].onclick = function() { //移除全部class样式后，添加当前活动样式
                    for (var m = 0; m < oli.length; m++) {
                        oli[m].className = "";
                    }
                    this.className = "oli_active";

                    for (var n = 0; n < odiv.length; n++) {
                        odiv[n].className = "";
                    }
                    odiv[this.index].className = "odiv_active";
                }
            }

        }


        function myBorder(i, num) {
            var content_list = document.getElementById("menu_" + i);
            var odiv = content_list.getElementsByTagName("div");

            for (var k = 0; k < odiv.length; k++) {

                var div_li = odiv[k].getElementsByTagName("li");

                var last = div_li.length % num;

                for (var j = 0; j < div_li.length; j++) {
                    if ((j + 1) % num === 0) {
                        div_li[j].classList.add("rn");
                    }
                    if (j >= div_li.length - num && j < div_li.length - last || j >= div_li.length-last) {
                        div_li[j].classList.add("by");
                    }

                }
            }
        }


        for (i = 0; i < head.length; i++) {
            myTab(i);
            myBorder(i, 7); // 动态添加边框
        }

    }
