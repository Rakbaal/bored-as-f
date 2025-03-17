type ActivityType = "chill" | "sport" | "getaway" | "indoor" | "outdoor"

export interface IActivity {
    img?: string
    label: string
    activityType: ActivityType[]
}

export const DUMMY_DATA:IActivity[] = [
    {
        "label": "Film",
        "activityType": [
            "chill",
            "indoor"
        ]
    },
    {
        "label": "Arkose",
        "activityType": [
            "sport",
            "indoor"
        ]
    },
    {
        "label": "Falaise", 
        "activityType": [
            "getaway",
            "outdoor",
            "sport"
        ]
    },
    {
        "label": "Randonnée",
        "activityType": [
            "outdoor",
            "sport",
            "getaway"
        ]
    },
    {
        "label": "Voie Gymnase",
        "activityType": [
            "sport",
            "indoor",
        ]
    },
    {
        "label": "Cuir",
        "activityType": [
            "chill",
            "indoor",
        ]
    }
]