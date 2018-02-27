;;; Directory Local Variables
;;; For more information see (info "(emacs) Directory Variables")
;;; See: https://www.simplify.ba/articles/2016/02/14/node-modules-bin-in-path/
((nil . ((eval . (progn
                   (add-to-list 'exec-path (concat (locate-dominating-file default-directory ".dir-locals.el") "node_modules/.bin/")))))))
