---
layout: page
title: Recherche
permalink: /recherche/
page_id: research
lang: "fr"
---

<div style="font-size: 2rem; font-weight: 300; margin-bottom: 1rem;">
Je crois que l'une des plus grandes joies de la vie est de découvrir et de construire de nouvelles choses, et de contribuer, même modestement, au débat scientifique.
</div>



<blockquote style="font-size: 1.1rem; margin-top: 1rem; font-style: italic;">
  Les actions du Seigneur sont extraordinaires, tous ceux qui les aiment réfléchissent sur elles ...<br>
  Il veut qu’on se souvienne de ses actions étonnantes. Le Seigneur a pitié, il aime avec tendresse.
  <br>
  <span style="font-size: 0.95rem;">(Psaume 111:2,4, PDV2017)</span>
</blockquote>

# Intérêts de recherche

Je m'intéresse à l'interprétabilité de l'apprentissage machine, à la linguistique computationnelle et aux fondements
théoriques de l'intelligence artificielle. Je suis particulièrement intéressé par des questions telles que: _Comment
rendre les réseaux neuronaux plus transparents ?_
et _Comment la structure linguistique et la sémantique interagissent-elles dans les modèles de traitement automatique du
langage naturel (TALN) multilingues ?_

**Vous cherchez une liste de toutes mes publications?**
Vous pouvez consulter un résumé de mes projets de recherche et de mes publications [ici](/publications) ou sur mon
<img alt="ORCID iD" src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png"
width="16" height="16" style="vertical-align: text-bottom; margin-left: 4px;" />
<a href="https://orcid.org/0009-0009-1806-2166" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">
profil ORCID</a>.

# Projets en cours

## Recommandations de rénovations énergétiques pour les quartiers grâce à l'apprentissage automatique

*juin 2025 — Aujourd'hui*

Une gestion raisonnée des ressources est essentielle, notamment en matière d'énergie des bâtiments. De nombreux
bâtiments sont bien moins performants énergétiquement qu'ils ne pourraient l'être, ce qui entraîne une consommation et
des coûts énergétiques excessifs. Si des outils de modélisation comme
EnergyPlus&trade; et les modèles énergétiques des bâtiments urbains (UBEM) permettent de simuler la consommation
énergétique des bâtiments, il ne s'agit que de simulations. Notre projet vise à aller plus loin: utiliser les résultats
de simulation et des données supplémentaires comme entrées pour alimenter des réseaux de neurones qui génèrent des
recommandations de rénovation à l'échelle du quartier.

_Remarque_: EnergyPlus est une marque déposée du Département de l'Énergie des États-Unis.

**En colaboration avec** Professeur [Jorge Silveyra](https://compsci.lafayette.edu/people/jorge-silveyra/) (Lafayette
College)
and [Dr. Chetan Tiwari](https://cas.gsu.edu/profile/chetan-tiwari/) (Georgia State University)

## Interprétation des réseaux de neurones de régression avec des substituts linéaires

**avril 2025–Aujourd'hui**

Dans ce projet, j'évalue la fiabilité des substituts linéaires pour l'interprétation des réseaux de neurones. À l'aide
d'une métrique appelée score lambda, je mesure la capacité des modèles linéaires à approximer les prédictions et les
représentations des réseaux entraînés. Si les substituts atteignent souvent une forte corrélation, je montre que cela
n'implique pas une approximation fidèle ; en fait, la variance inexpliquée restante peut correspondre à la logique de
décision réelle du réseau. Cela suggère que les substituts linéaires simples peuvent être trompeurs, en particulier
lorsque des comportements non linéaires clés se situent dans des régions à faible variance de l'espace d'entrée.

À l'avenir, je m'intéresse au développement d'un cadre connexe pour les tâches de classification afin de déterminer si
le décalage entre fidélité et précision observé en régression se produit également dans les contextes de classification.
Je cherche également à caractériser plus précisément l'écart fidélité-précision en étudiant la relation entre λ(f) et le
R² entre le substitut et la vérité terrain, en analysant quand et pourquoi une fidélité élevée du substitut ne parvient
pas à préserver les performances prédictives.

### Publications

**Jackson Eshbaugh.**  
*Fidelity Isn’t Accuracy: When Linearly Decodable Functions Fail to Match the Ground Truth.*  
arXiv preprint [arXiv:2506.12176](https://arxiv.org/abs/2506.12176), June 2025.  
📄 [PDF](https://arxiv.org/pdf/2506.12176)🔗 [arXiv](https://arxiv.org/abs/2506.12176)
💻 [Code](https://github.com/jacksoneshbaugh/lambda-linearity-score)

## Détection d'idiomes français grâce aux techniques de traduction automatique neuronale

**février 2025–Aujourd'hui**

Les expressions idiomatiques restent un défi majeur en traduction automatique neuronale (NMT), entraînant souvent des
erreurs dans les systèmes statistiques et modernes de NMT. ​​Dans ce projet, j'adapte des techniques efficaces pour
identifier les idiomes dans les corpus anglais et les applique aux données françaises. Ce travail, encore à ses débuts,
constituera mon mémoire de fin d'études en français et en informatique.

# Projets à venir

## FuncLearn: Un langage de programmation fonctionnel pour l'apprentissage machine

**Statut**: Conception préliminaire

L'apprentissage machine est utilisé dans de nombreuses disciplines, mais pour les personnes extérieures à
l'informatique, travailler avec Python et TensorFlow peut paraître inutilement complexe. FuncLearn vise à fournir un
langage fonctionnel simple, intuitif, proche de l'anglais, qui simplifie l'accès. Ce langage compilera du code Python
basé sur TensorFlow, permettant aux utilisateurs d'importer des jeux de données, de créer des modèles de chaîne et
d'entraîner des réseaux grâce à une syntaxe expressive et composable ; aucune expertise en apprentissage machine n'est
requise.

# Intérêts / Idées à long terme

Je m'intéresse également à l'accessibilité des langages de programmation, en particulier au potentiel des mots-clés
localisés (par exemple, en utilisant la syntaxe native comme `si` au lieu de `if`) et à la refonte des structures
syntaxiques pour les langages s'écrivant de droite à gauche. Bien que ce travail soit encore conceptuel, il reflète un
intérêt plus large pour la conception inclusive des langages.
