(require 'cl)
(require 'package)

(setq package-list '(dockerfile-mode swift-mode markdown-mode flycheck))

(add-to-list 'package-archives
             '("melpa-stable" . "https://stable.melpa.org/packages/"))

(package-initialize)

(unless package-archive-contents
  (package-refresh-contents))

(dolist (package package-list)
  (unless (package-installed-p package)
    (package-install package)))

(add-hook 'after-init-hook #'global-flycheck-mode)

(add-to-list 'flycheck-checkers 'swift)
Status API Training Shop Blog About
