Feature: Managing Login in Blueprint page

    As a Cyberlogitech VietNam staff,
    I want to login to the Blueprint page fast and secure

    # Scenario: Login Successfully
    #     Given I open Blueprint page
    #     When I type 'huynguyendac' in username and 'Clvbp@123!' in password and click login
    #     Then Display Dashboard page

    Scenario: Login Failed
        Given I open Blueprint page
        When I type 'huynguyendac' in username and 'Clvbp@123!sdaddd' in password and click login
        Then Display invalid UserID or Password
