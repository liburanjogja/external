
var favIcon = "\
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEVHcExunx6UvTuJtTNNgA2JtTGEsC9xoCNnmRuDsSxZjBSgx0GTvTikzEN9qyxwoCKq0UmDsStajxVdkBeUvTugyECcxECpz0uItDaUvDqGsTCNtzSArixrmx+Ywj243FMyP0HfAAAAG3RSTlMAYlNFJSFmEE8wPZ7Xb8aJ+ePZe3rVg9ypr5ReQpdSAAAAjUlEQVQY03VP2RKDQAjL3ux6W+0F6v//pau2zjjT8sAECIEAPyJWJwx7LucCsCoXt4m2xp3ZZGxBInGnFNxBcYC09FlthFyJd5sOzSaBej2k1sFtK2aWWivvvKFR+p1jfZUnoamfg91u2+SrfDMcT/hSJh41ffXxWPhlELt4PqsdQKwuZtxSX93ZIuBvrG6SBd1v38e3AAAAAElFTkSuQmCC";

var docHead = document.getElementsByTagName('head')[0];
var newLink = document.createElement('link');
newLink.rel = 'shortcut icon';
newLink.type = 'image/x-icon';
newLink.href = 'data:image/png;base64,'+favIcon;
docHead.appendChild(newLink);


