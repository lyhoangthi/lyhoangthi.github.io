function go_to(url) {
                window.location=url;
                }
                function rand_link() {
                var a;
                a = 1+Math.round(Math.random()*5);
                if (a==1) go_to("beyonce.html");
                else
                if (a==2) go_to("jojo.html");
                else
                if (a==3) go_to("newjeans.html");
                else
                if (a==4) go_to("kehlani.html");
                else
                if (a==5) go_to("twice.html");
                else go_to("victoria.html");
                }

