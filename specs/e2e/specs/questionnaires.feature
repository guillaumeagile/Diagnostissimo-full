Feature: verification de l'affichage des questionnaires

Scenario: si pas de questionnaire alors un message specifique est affiché
    #Given 0 questionnaire existe déjà
        Given the home page is loaded with following values as questionnaires
            | nom_du_medecin | toxicite | date_saisie         |           
    When la page s'ouvre
    Then un message contient 'pas de questionnaires'
    And il n'y a pas de bloc questionnaire

    Scenario: si un questionnaire existe alors un bloc questionnaire s'affiche
         Given the home page is loaded with following values as questionnaires
            | nom_du_medecin | toxicite | date_saisie         |
            | doc1           | 0        | 2019-12-19T08:00:15 |
            | 456            | 2        | 2019-12-19T08:00:15 |
            | 789            | 3        | 2019-12-19T08:00:15 |
        When la page s'ouvre
  #      Then il n'un message contient rien du tout
  #      And il y a un élément 'questionnaire-bloc'